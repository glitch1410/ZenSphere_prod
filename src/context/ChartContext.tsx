'use client'

import { createContext, useContext, useState } from 'react';

interface UserData {
  // Add your user data properties here
  id?: string;
  name?: string;
  // ... other user properties
}

type ChartData = {
  // Define your chart data properties here, for example:
  labels?: string[];
  datasets?: unknown[];
}

type AnalysisData = object;

const ChartContext = createContext<{
  userData: UserData | null;
  chartData: ChartData | null;
  analysisData: AnalysisData | null;
  setUserData: (data: UserData) => void;
  setChartData: (data: ChartData) => void;
  setAnalysisData: (data: AnalysisData) => void;
}>({
  userData: null,
  chartData: null,
  analysisData: null,
  setUserData: () => {},
  setChartData: () => {},
  setAnalysisData: () => {},
});

export function ChartProvider({ children }: { children: React.ReactNode }) {
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null);

  return (
    <ChartContext.Provider value={{ 
      chartData, 
      setChartData, 
      userData, 
      setUserData,
      analysisData,
      setAnalysisData 
    }}>
      {children}
    </ChartContext.Provider>
  );
}

export const useChartContext = () => useContext(ChartContext);
