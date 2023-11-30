import React from "react";
import { StackParams } from '@/navigation/MainStack';
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<StackParams>();

const navigate: React.FC<keyof StackParams> = (path: any, params: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(path, params);
  }
  return null;
};

const goBack = () => {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
};


export const RootNavigation = {
  navigate,
  goBack,
};