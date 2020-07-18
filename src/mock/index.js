import Mock from "mockjs"
import menumod from "./menumod.json"
Mock.mock('/mock/API/menumod/query', { code: 200, message: '成功', data: menumod })
// Mock.mock('/mock/floors', { code: 200, message: '成功', data: floors })
