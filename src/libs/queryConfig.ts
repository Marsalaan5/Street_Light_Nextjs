import { DefaultOptions } from "@tanstack/react-query";

export const queryConfig: DefaultOptions = {
    queries: {
        retry: 1,
        refetchOnWindowFocus: false,
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 10 * 60 * 1000,   // Cache removed after 10 minutes of inactivity
    },

    mutations: {
        retry: 0,
    },
};