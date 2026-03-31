import { db } from "@/app/utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  try {
    const itemsCollectionRef = collection(db, "users", userId, "items");
    const querySnapshot = await getDocs(itemsCollectionRef);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching items: ", error);
  }
};

export const addItem = async (userId, item) => {
  try {
    const itemsCollectionRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsCollectionRef, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item: ", error);
  }
};
