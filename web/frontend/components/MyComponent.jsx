import React from 'react'
import { useTest, useGetProducts } from '../hooks';

function MyComponent() {


    const {
        productData,
        refetch: refetchProductCount,
        isLoading: isLoadingCount1,
        isRefetching: isRefetchingCount1,
      } = useGetProducts({
        url: "/api/getProduct",
        reactQueryOptions: {
          onSuccess: () => {
            // setIsLoading(false);
          },
        },
      });
    //   console.log(data)
    //   console.log(refetchProductCount)
    //   console.log(isLoadingCount)
    //   console.log(isRefetchingCount)
  return (
    <div>MyComponent</div>
  )
}

export default MyComponent