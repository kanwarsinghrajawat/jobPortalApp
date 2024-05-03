export const applyFilters = (jobs: any, filterKeyword: any) => {
  console.log(filterKeyword.searchFilter, "rtghbnm,");
  return jobs.filter((job: any) => {
    let passFilter = true;

    // Check job role filter
    if (
      filterKeyword.jobrole &&
      filterKeyword.jobrole.length > 0 &&
      !filterKeyword.jobrole.some(
        (role: any) => job.jobRole.toLowerCase() === role.toLowerCase()
      )
    ) {
      passFilter = false;
    }

    // Check location filter
    if (
      filterKeyword.location &&
      filterKeyword.location.length > 0 &&
      !filterKeyword.location.some(
        (location: any) => job.location.toLowerCase() === location.toLowerCase()
      )
    ) {
      passFilter = false;
    }

    // Check job type filter
    if (
      filterKeyword.jobType &&
      filterKeyword.jobType.length > 0 &&
      !filterKeyword.jobType.some(
        (type: any) => job.location.toLowerCase() === type.toLowerCase()
      )
    ) {
      passFilter = false;
    }

    // Check experience filter
    if (
      filterKeyword.experience &&
      filterKeyword.experience.length > 0 &&
      !isNaN(parseInt(filterKeyword.experience)) &&
      parseInt(job.minExp) < parseInt(filterKeyword.experience)
    ) {
      passFilter = false;
    }

    // Check salary filter
    if (
      filterKeyword.salary &&
      filterKeyword.salary.length > 0 &&
      !isNaN(parseInt(filterKeyword.salary)) &&
      parseInt(job.minJdSalary) < parseInt(filterKeyword.salary)
    ) {
      passFilter = false;
    }
    // Check searchCompany name filter
    // Check search company name filter
    if (
      filterKeyword.searchFilter &&
      filterKeyword.searchFilter.length > 0 &&
      !job.companyName
        .toLowerCase()
        .includes(filterKeyword.searchFilter.toLowerCase())
    ) {
      passFilter = false;
    }

    return passFilter;
  });
};
