import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { caseConverter } from "./converter";

export const fetchCaseList = async () => {
  const ref = collection(db, "cases").withConverter(caseConverter);
  const snapshot = await getDocs(ref);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
