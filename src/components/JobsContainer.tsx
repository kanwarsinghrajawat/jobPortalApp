import { JdItem } from "../types/index.ts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { apiCall, filterDuplicateRecords } from "../lib/ApiCall.ts";
import Cards from "./Cards.tsx";
import { applyFilters } from "../lib/FilterLogic.ts";
import { selectedFilterCount } from "../store/reducer.ts";
import NoMatchFound from "./NoMatchFound.tsx";
import ShimmerEffect from "./ShimmerEffect.tsx";

const JobsContainer = () => {
  const [allJobs, setAllJobs] = useState(new Array<any>());
  const [jobsToShow, setAllJobsToShow] = useState(new Array<any>());
  const [loader, setLoader] = useState(true);
  const [shimmer, setShimmer] = useState(true);
  const [filterValues, setFilterValues] = useState<JdItem[]>([]);

  const [pagination, setPagination] = useState({
    limit: 10,
    offset: 0,
  });
  const shimmerArray = Array.from({ length: 8 });

  const loadMoreRef: any = useRef(null);
  const [loadPagination, setLoadPagination] = useState(false);
  const dispatch = useDispatch();
  const filterKeyword = useSelector(
    (store: any) => store.jobsDetailFetch.selectedFilter
  );
  const filterCount = useSelector(
    (store: any) => store.jobsDetailFetch.filterCount
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        setShimmer(true);
        const data = await apiCall(pagination);
        const currentJobs = data?.jdList;
        setAllJobs([...allJobs, ...currentJobs]);

        let count = 0;
        for (const key in filterKeyword) {
          if (
            (Array.isArray(filterKeyword[key]) &&
              filterKeyword[key].length > 0) ||
            (typeof filterKeyword[key] === "string" &&
              filterKeyword[key].trim().length > 0)
          ) {
            count++;
          }
        }
        dispatch(selectedFilterCount(count));

        if (count > 0) {
          let filtersJob = applyFilters(allJobs, filterKeyword);
          setAllJobsToShow(filtersJob);
        } else {
          setAllJobsToShow([...allJobs, ...currentJobs]);
        }
        setShimmer(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [loader, filterKeyword]);

  useEffect(() => {
    setShimmer(true);

    const handleObserver = (entities: any) => {
      const target = entities[0];
      if (target.isIntersecting) {
        setLoader((prev) => !prev);
        setPagination((prev) => ({
          offset: prev.offset + 10,
          limit: 10,
        }));
      }
    };

    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0.5,
    };
    const observer: any = new IntersectionObserver(handleObserver, options);
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
    setShimmer(false);

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [loadPagination]);

  useEffect(() => {
    const filtered = filterDuplicateRecords(jobsToShow, "jdUid");
    setFilterValues(filtered);
  }, [jobsToShow, filterDuplicateRecords]);

  return (
    <>
      {filterCount > 0 && jobsToShow.length <= 0 ? (
        <NoMatchFound />
      ) : (
        <>
          {filterValues?.map((item: JdItem, index: number) => (
            <Cards item={item} key={index} />
          ))}
          {shimmer && (
            <>
              {shimmerArray.map((_, index) => (
                <ShimmerEffect key={index} />
              ))}
            </>
          )}
        </>
      )}

      <div ref={loadMoreRef}></div>
    </>
  );
};

export default JobsContainer;
