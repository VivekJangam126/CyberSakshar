export class ScenarioEngine {
  constructor(scenario) {
    this.scenario = scenario;
  }

  getInitialState() {
    return {
      currentSceneIndex: 0,
      currentScene: this.scenario.scenes[0],
      choices: [],
      score: 0,
      completed: false,
    };
  }

  processChoice(currentState, choice) {
    const newChoices = [...currentState.choices, choice];
    const newScore = currentState.score + (choice.points || 0);

    if (choice.nextScene === 'end') {
      return {
        ...currentState,
        choices: newChoices,
        score: newScore,
        completed: true,
        result: this.calculateResult(newScore, newChoices),
      };
    }

    const nextSceneIndex = this.scenario.scenes.findIndex(
      (scene) => scene.id === choice.nextScene
    );

    return {
      currentSceneIndex: nextSceneIndex,
      currentScene: this.scenario.scenes[nextSceneIndex],
      choices: newChoices,
      score: newScore,
      completed: false,
    };
  }

  calculateResult(score, choices) {
    const maxScore = this.scenario.maxScore || 100;
    const percentage = Math.round((score / maxScore) * 100);

    if (percentage >= 80) {
      return {
        title: 'Excellent!',
        message: 'You handled the situation very well and made secure choices.',
        score: percentage,
        grade: 'A',
      };
    } else if (percentage >= 60) {
      return {
        title: 'Good Job!',
        message: 'You made some good choices but there is room for improvement.',
        score: percentage,
        grade: 'B',
      };
    } else if (percentage >= 40) {
      return {
        title: 'Fair',
        message: 'You need to be more careful with cybersecurity decisions.',
        score: percentage,
        grade: 'C',
      };
    } else {
      return {
        title: 'Needs Improvement',
        message: 'Consider reviewing the lessons before trying again.',
        score: percentage,
        grade: 'D',
      };
    }
  }
}
