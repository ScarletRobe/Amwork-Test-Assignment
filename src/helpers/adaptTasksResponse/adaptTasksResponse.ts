import { faker } from "@faker-js/faker";
import { ITask, ITaskResponse } from "../../types";

export const adaptTasksResponse = (response: ITaskResponse[]): ITask[] => {
  const dateParams = {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  } as const;

  return response.map((task) => ({
    ...task,
    startDate: faker.date.past().toLocaleDateString("en-US", dateParams),
    endDate: faker.date.future().toLocaleDateString("en-US", dateParams),
    enitity: faker.word.adjective({ length: { min: 1, max: 10 } }),
    tag: faker.word.adjective({ length: { min: 1, max: 10 } }),
    description: faker.hacker.phrase(),
  }));
};
