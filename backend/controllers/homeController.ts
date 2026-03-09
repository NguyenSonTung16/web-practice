import {Response,Request} from "express";
import {getHomeService} from "../services/getHomeService";
export const getHome = (req: Request, res: Response) => {
    const mesage = getHomeService();
    res.send(mesage);
};