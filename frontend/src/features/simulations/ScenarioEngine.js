// Scenario Engine - Utility for managing simulation flow
// This is a placeholder for future backend integration
// Currently, all logic is handled in the page components with mock data

export class ScenarioEngine {
  constructor(scenario) {
    this.scenario = scenario;
  }

  // Get initial state for a scenario
  getInitialState() {
    return {
      currentStepIndex: 0,
      decisions: [],
      completed: false,
    };
  }

  // Process a decision and move to next step
  processDecision(currentState, decision) {
    const newDecisions = [...currentState.decisions, decision];
    const nextStepIndex = currentState.currentStepIndex + 1;
    const isComplete = nextStepIndex >= this.scenario.steps.length;

    return {
      currentStepIndex: nextStepIndex,
      decisions: newDecisions,
      completed: isComplete,
    };
  }

  // Calculate summary statistics
  getSummary(decisions) {
    const safeChoices = decisions.filter(d => d.isSafe).length;
    const riskyChoices = decisions.filter(d => !d.isSafe).length;
    const totalChoices = decisions.length;

    return {
      safeChoices,
      riskyChoices,
      totalChoices,
      safetyPercentage: totalChoices > 0 ? Math.round((safeChoices / totalChoices) * 100) : 0,
    };
  }
}

export default ScenarioEngine;
