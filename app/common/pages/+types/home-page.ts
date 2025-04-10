import type { LoaderFunctionArgs, ActionFunctionArgs, MetaFunction } from "react-router";

export interface LoaderData {
  title: string;
}

export interface ActionData {
  status: number;
}

export interface Route {
  LoaderArgs: LoaderFunctionArgs;
  ActionArgs: ActionFunctionArgs;
  MetaFunction: MetaFunction<LoaderData> & { data: LoaderData };
  ComponentProps: {
    loaderData: LoaderData;
    actionData?: ActionData;
  };
} 