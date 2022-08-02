import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../routes/Coordinator"


export const useUnprotectedPage = () => {

  const navigate = useNavigate()


  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token !== null) {
      goToFeed(navigate)
    }
  }, [])

}