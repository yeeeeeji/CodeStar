import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { Cases } from "./types";

export const caseConverter = {
  toFirestore(data: Cases): DocumentData {
    return data;
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): Cases {
    const d = snapshot.data();
    return {
      category: d.category,
      title: d.title,
      content: d.content,
    };
  },
};
