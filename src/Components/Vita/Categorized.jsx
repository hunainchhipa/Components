const categorizeEncounters = (encounters) => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const isSameDay = (date1, date2) =>
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const categorized = {
    today: [],
    yesterday: [],
    last7Days: [],
    last30Days: [],
    earlier: [],
  };

  encounters.forEach((encounter) => {
    const encounterDate = new Date(encounter.createdAt);
    if (isSameDay(encounterDate, today)) {
      categorized.today.push(encounter);
    } else if (isSameDay(encounterDate, yesterday)) {
      categorized.yesterday.push(encounter);
    } else if (
      encounterDate >
      new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7)
    ) {
      categorized.last7Days.push(encounter);
    } else if (
      encounterDate >
      new Date(today.getFullYear(), today.getMonth(), today.getDate() - 30)
    ) {
      categorized.last30Days.push(encounter);
    } else {
      categorized.earlier.push(encounter);
    }
  });

  return categorized;
};

export default categorizeEncounters;
