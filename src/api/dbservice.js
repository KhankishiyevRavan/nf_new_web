import { database } from "./firebase";
import { ref, push,get, set, child } from "firebase/database";
// Veriyi belirli bir yola yazmak için fonksiyon
export const writeData = (path, data) => {
  const dataRef = ref(database, path);
  const newRef = push(dataRef);  // Yeni referans oluştur ve yeni benzersiz anahtar al
  return set(newRef, data);  // Yeni referans altında veriyi yaz
};

// Belirli bir yoldan veriyi okumak için fonksiyon
export const readData = async (path) => {
  const dbRef = ref(database);
  try {
    const snapshot = await get(child(dbRef, path));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error("Error reading data: ", error);
  }
};
