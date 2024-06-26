import axios from 'axios';

import {
  useMutation,
  useQuery,
  useQueryClient as createQueryClient,
} from '@tanstack/react-query';

const queryClient = createQueryClient();

export const useAxios = axios.create({
  baseURL: "",
  headers: {
    Authorization: "",
  },
});

export const useGetter = ({
  endPoint,
  key,
  timer,
  reFaildTime,
}: {
  endPoint: string;
  key: string;
  timer?: number;
  reFaildTime?: number;
}) =>
  useQuery({
    queryKey: [key],
    staleTime: timer || Infinity,
    retry: reFaildTime,
    queryFn: async () => {
      const req = await useAxios.get(endPoint);
      const { data } = await req.data;
      return data;
    },
  });

export const useSetter = ({
  endPoint,
  key,
  reFaildTime,
  data,
}: {
  endPoint: string;
  key: string;
  reFaildTime?: number;
  data: any;
}) =>
  useMutation({
    mutationKey: [key],
    retry: reFaildTime,
    mutationFn: async () => {
      return useAxios.get(endPoint);
    },
    onSuccess: (res) => {
      const { data } = res;
      queryClient.invalidateQueries({ queryKey: [key] });
      return data;
    },
  });
