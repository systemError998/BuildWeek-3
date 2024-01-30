import React, { useEffect } from "react";
import { PiTargetBold } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { fetchJobs } from "../../redux/slice/JobsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";

export default function JobCard() {

    const jobsResponse = useSelector(state => state.jobs.jobs)
    const loading = useSelector(state => state.jobs.loading)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchJobs())
    }, [dispatch])
    console.log(jobsResponse)

  return (
    <div>
    { loading ? (<LoadingSpinner />) 
    : jobsResponse && jobsResponse.slice(0, 10).map((job) => (
    <div key={job._id} className="row mt-2">
      <div className="col-2">
      <div
                    className='d-flex justify-content-center align-items-center w-100'
                >
                    <i className="bi bi-buildings fs-1"></i>
                </div>
      </div>
      <div className="col-9 d-flex flex-column">
        <p as={Link} to="/jobpage" className="fs-6 fw-semibold text-primary m-0 jobName">
          {job.title}
        </p>
        <span>{job.company_name}</span>
        <span style={{ color: "#707070" }} className="pb-1">
          {job.candidate_required_location}
        </span>
        <span style={{ color: "#707070" }} className="pb-1">
          {job.job_type}
        </span>
        <span style={{ color: "#707070" }} className="pb-2">
          {" "}
          <PiTargetBold className="fs-4" style={{ color: "#01754F" }} />{" "}
          Selezione attiva
        </span>
        <div>
          <span style={{ color: "#707070" }}>
            {" "}
            <FaCheck /> Visualizzato Promosso{" "}
          </span>
          <span>-</span>
          <span style={{ color: "#707070" }}>
            {" "}
            <BsLinkedin style={{ color: "#0A66C2" }} /> Candidatura semplice{" "}
          </span>
        </div>
      </div>
      <div className="col-1">
        <div className="buttonJobClose d-flex align-items-center justify-content-center">
          <AiOutlineClose className="fs-4" />
        </div>
      </div>
      <hr className="mt-3 mb-0 pb-0"/>
    </div>
    ))}
    </div>
  );
}
