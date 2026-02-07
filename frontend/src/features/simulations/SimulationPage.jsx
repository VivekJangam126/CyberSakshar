import React, { useState, useEffect } from 'react';
import { simulationAPI } from './simulationAPI';
import { ScenarioEngine } from './ScenarioEngine';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

const SimulationPage = () => {
  const [scenarios, setScenarios] = useState([]);
  const [currentScenario, setCurrentScenario] = useState(null);
  const [scenarioState, setScenarioState] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadScenarios();
  }, []);

  const loadScenarios = async () => {
    try {
      const data = await simulationAPI.getScenarios();
      setScenarios(data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to load scenarios:', error);
      setLoading(false);
    }
  };

  const startScenario = (scenario) => {
    setCurrentScenario(scenario);
    const engine = new ScenarioEngine(scenario);
    setScenarioState(engine.getInitialState());
  };

  const handleChoice = async (choice) => {
    const engine = new ScenarioEngine(currentScenario);
    const newState = engine.processChoice(scenarioState, choice);
    
    if (newState.completed) {
      setResult(newState.result);
      setShowResult(true);
      
      try {
        await simulationAPI.submitSimulation({
          scenarioId: currentScenario.id,
          choices: newState.choices,
          result: newState.result,
        });
      } catch (error) {
        console.error('Failed to submit simulation:', error);
      }
    } else {
      setScenarioState(newState);
    }
  };

  const closeSimulation = () => {
    setCurrentScenario(null);
    setScenarioState(null);
    setShowResult(false);
    setResult(null);
  };

  if (loading) return <div className="text-center p-8">Loading simulations...</div>;

  if (currentScenario) {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">{currentScenario.title}</h1>
          <Card>
            <p className="text-lg mb-4">{scenarioState?.currentScene?.description}</p>
            <div className="space-y-3">
              {scenarioState?.currentScene?.choices.map((choice, index) => (
                <Button
                  key={index}
                  onClick={() => handleChoice(choice)}
                  variant="secondary"
                  className="w-full text-left"
                >
                  {choice.text}
                </Button>
              ))}
            </div>
          </Card>
          <Button onClick={closeSimulation} variant="secondary" className="mt-4">
            Exit Simulation
          </Button>
        </div>

        <Modal
          isOpen={showResult}
          onClose={closeSimulation}
          title="Simulation Complete"
        >
          <div className="text-center">
            <p className="text-2xl font-bold mb-4">{result?.title}</p>
            <p className="mb-4">{result?.message}</p>
            <p className="text-lg">Score: {result?.score}%</p>
          </div>
        </Modal>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Cybersecurity Simulations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((scenario) => (
            <Card key={scenario.id} title={scenario.title}>
              <p className="text-gray-600 mb-4">{scenario.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{scenario.difficulty}</span>
                <Button onClick={() => startScenario(scenario)}>Start</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimulationPage;
