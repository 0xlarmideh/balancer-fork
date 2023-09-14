
import React, { Dispatch, SetStateAction, useState, useContext, Children } from "react";
export type poolType = "weighted_pool" | "stable_pool" | null;

type PoolsContextType = {
  // formValues: any;
  // updateFormField: (
  //   fieldName: keyof xxx,
  //   value: any
  // ) => void;
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  goBack: () => void;
  goNext: () => void;
  poolType: poolType;
  setPoolType: (pool: poolType) => void;
};

export const PoolStateContext =
  React.createContext<PoolsContextType | null>(null);

export const PoolStateContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [poolType, setPoolType] = useState<poolType>(null)
  // const [formValues, setFormValues] =
  //   useState<any>(initialData);

  // const updateFormField = (
  //   fieldName: keyof xxx,
  //   value: any
  // ) => {
  //   setFormValues((prevData) => ({
  //     ...prevData,
  //     [fieldName]: value,
  //   }));
  // };

  const goBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const goNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const contextValue:PoolsContextType = {
    // formValues,
    currentStep,
    setCurrentStep,
    goBack,
    goNext,
    poolType,
    setPoolType
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

export function withPoolsContextProvider<T>(
  Component: React.ReactNode
) {
  return function withPoolsContextProvider(props: T) {
    return (
      <PoolStateContextProvider>
        {/* <Component {...props} /> */}
        {Component}
      </PoolStateContextProvider>
    );
  };
}