import axios from "axios";
export const getData = async () => {
  let response = await axios.get("http://localhost:8080/Summer_Internship_Backend/SendData");
  return response.data.datas;
}
getData();