import React from "react"
import "./style.css"
import { DealList, Loader, Error, Button } from "../../components"
import { useGetDealsQuery } from "../../redux/dealsApi"
import { useAppSelector } from "../../hooks/hooks"

export const Home = () => {
  const token = useAppSelector(state => state.user.token)
  const {
    data: deals,
    isLoading,
    error,
    isError,
  } = useGetDealsQuery(token as string)

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="home">
      <div className="home__inner">
        <div className="home__content">
          <h1 className="home__title">The chemical negatively charged</h1>
          <p className="home__subtitle">
            Numerous calculations predict, and experiments confirm, that the
            force field reflects the beam, while the mass defect is not formed.
            The chemical compound is negatively charged. Twhile the mass defect
            is
          </p>
          <Button style={{ color: "#fff", border: "1px solid #fff" }}>
            Get Started
          </Button>
        </div>
      </div>
      {deals && <DealList deals={deals} />}
      {isError && (
        //@ts-ignore
        <Error error={error.data.error ? error.data.error : "Occured some error with fetching deals"}
        />
      )}
    </div>
  )
}
