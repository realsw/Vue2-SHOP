import instance from "./request";
//统一管理项目中所有api链接

export const jinpinApi = () => instance.get("/products/recommend")