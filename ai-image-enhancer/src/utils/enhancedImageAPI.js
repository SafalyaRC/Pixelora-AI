import axios from 'axios';

const API_KEY="wxwmv7z3kky9x78ro"
const BASE_URL="https://techhk.aoscdn.com/"
const MAXIMUM_RETRIES = 20;

export const enhancedImageAPI = async (file) => {
    try {
       const taskId=await uploadImage(file);
       const enhancedImageData=await pollEnhancedImage(taskId);
       return enhancedImageData
        
    } catch (error) {
        console.log("Error in enhancedImageAPI:", error.message);
    }
}

const uploadImage = async (file) => {
     // /api/tasks/visual/scale

     const formData = new FormData();
     formData.append('image_file', file);

     const {data}= await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
        headers:{
            "Content-Type": "multipart/form-data",
            "X-API-KEY": API_KEY
        },
     })

     if (!data?.data?.task_id) {
        throw new Error("Failed to upload image! Task ID not found.");
    }

     return data.data.task_id;

}


const pollEnhancedImage = async (taskId,retries=0) => {
     const result = await fetchEnhancedImage(taskId);

    if (result.state === 4) {
        console.log(`Processing...(${retries}/${MAXIMUM_RETRIES})`);

        if (retries >= MAXIMUM_RETRIES) {
            throw new Error("Max retries reached. Please try again later.");
        }

        // wait for 2 second
        await new Promise((resolve) => setTimeout(resolve, 2000));

        return pollEnhancedImage(taskId, retries + 1);
    }

    console.log("Enhanced Image URL:", result);
    return result;
}

const fetchEnhancedImage = async (taskId) => {
    // /api/tasks/visual/scale/{task_id}
     const {data}= await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`,  {
        headers:{
            "X-API-KEY": API_KEY
        },
     })
      if (!data?.data) {
        throw new Error("Failed to fetch enhanced image! Image not found.");
    }

    return data.data;
}