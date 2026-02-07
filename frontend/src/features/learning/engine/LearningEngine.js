// Learning Engine - Manages micro learning flow and state

export class LearningEngine {
  constructor(moduleData) {
    this.module = moduleData;
    this.currentBlockIndex = 0;
    this.startTime = Date.now();
  }

  // Get module metadata
  getModuleInfo() {
    return {
      id: this.module.id,
      title: this.module.title,
      duration: this.module.duration,
      icon: this.module.icon,
      category: this.module.category,
    };
  }

  // Get contextual introduction
  getContext() {
    return this.module.context;
  }

  // Get all content blocks
  getContentBlocks() {
    return this.module.content;
  }

  // Get current content block
  getCurrentBlock() {
    return this.module.content[this.currentBlockIndex];
  }

  // Move to next block
  nextBlock() {
    if (this.currentBlockIndex < this.module.content.length - 1) {
      this.currentBlockIndex++;
      return this.getCurrentBlock();
    }
    return null;
  }

  // Check if there are more blocks
  hasMoreBlocks() {
    return this.currentBlockIndex < this.module.content.length - 1;
  }

  // Get progress percentage
  getProgress() {
    return Math.round(((this.currentBlockIndex + 1) / this.module.content.length) * 100);
  }

  // Get psychology insight
  getPsychologyInsight() {
    return this.module.psychology;
  }

  // Get safety rule
  getSafetyRule() {
    return this.module.safetyRule;
  }

  // Get completion data
  getCompletion() {
    const timeSpent = Math.round((Date.now() - this.startTime) / 1000 / 60); // minutes
    return {
      ...this.module.completion,
      timeSpent: `${timeSpent} min`,
    };
  }

  // Calculate reading time estimate
  static estimateReadingTime(text) {
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  }
}
