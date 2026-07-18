import { QueryClient } from "@tanstack/react-query";
import { queryConfig } from "./queryConfig";

export const createQueryClient = () =>
    new QueryClient({
        defaultOptions: queryConfig,
    });