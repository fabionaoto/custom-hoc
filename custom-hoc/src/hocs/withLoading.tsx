import { CircularProgress } from "@mui/material";
import React from "react";

interface WithLoadingProps {
  loading: boolean;
}

const withLoading =
  <P extends object>(
    Component: React.ComponentType<P>
  ): React.FC<P & WithLoadingProps> =>
  ({ loading, ...props }: WithLoadingProps) =>
    loading ? <CircularProgress /> : <Component {...(props as P)} />;

export default withLoading;
