export const calculatePerformance = (categories: any) => {

  const calculateProgress = (completed: number, total: number) => {
    return (completed / total) * 100;
  };

  const progressPercentages = categories.map((category: any) => {
    return calculateProgress(category.completed, category.total);
  });

  const totalProgress = progressPercentages.reduce(
    (sum: number, percentage: number) => {
      return sum + percentage;
    },
    0
  );

  const performancePercentage = Math.round(
    totalProgress / progressPercentages.length
  );

  return performancePercentage;
};
