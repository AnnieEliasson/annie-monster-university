export type Monster = {
  id: number | string;
  firstName: string;
  lastNamn: string;
  program: string;
  appearance: {
    eyes: number;
    tentacles: number;
    color: string;
    skin: string;
    horn: {
      hasHorn: boolean;
      description?: string;
    };
  };
  hobbies: string[];
  homeTown: string;
};
