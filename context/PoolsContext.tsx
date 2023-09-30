
import React, { Dispatch, SetStateAction, useState, useContext, Children } from "react";
export type poolType = "weighted_pool" | "stable_pool" | null;

type IPoolFormType = {
  poolType: poolType;
  poolFees: number | null;
}

type PoolsContextType = {
  poolDetails: IPoolFormType;
  updatePoolDetail: (fieldName: keyof IPoolFormType, value: any) => void;
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  goBack: () => void;
  goNext: () => void;
};

const initialData: IPoolFormType = {
  poolType: null,
  poolFees: null,
};

export const PoolStateContext =
  React.createContext<PoolsContextType | null>(null);

export const PoolStateContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [poolDetails, setPoolDetails] = useState<IPoolFormType>(initialData)
  const updatePoolDetail = (
    fieldName: keyof IPoolFormType,
    value: any
  ) => {
    setPoolDetails((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const goBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const goNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const contextValue: PoolsContextType = {
    poolDetails,
    updatePoolDetail,
    currentStep,
    setCurrentStep,
    goBack,
    goNext,
  };

  return (
    <PoolStateContext.Provider 
    value={contextValue}
    >
      {children}
    </PoolStateContext.Provider>
  );
};


export const usePoolsContext = () => {
  const context = useContext(PoolStateContext);
  if (context === null) {
    throw new Error(
      "usePoolsContext must be used within a PoolsContextProvider"
    );
  }
  return context;
};

export function withPoolsContextProvider(
  Component: React.ReactNode
) {
  return function withPoolsContextProvider() {
    return (
      <PoolStateContextProvider>
        { Component }
      </PoolStateContextProvider>
    );
  };
}