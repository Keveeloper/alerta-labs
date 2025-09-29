import { SubscriberRequest } from "../../service/modules/users/types";
import { postCreateSubcriber } from "../../service/modules/users/users";


const useFormEmail = () => {

  const PostHookSubscriber = async (reqData: SubscriberRequest) => {
    try {
      const response = await postCreateSubcriber(reqData);
      if (response.success && response.response) {
        return response.response;
      } else {
        throw { error: 'Failed to fetch data', success: response.success };
      }
    } catch (error) {
      return error as Error;
    }
  };
  
  return { PostHookSubscriber };
};

export default useFormEmail;
