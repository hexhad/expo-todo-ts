import { Todo } from "./realmScheme";
import Realm from "realm";

const realm = new Realm({
  schema: [Todo],
  deleteRealmIfMigrationNeeded: true,
});

export const realmStorage = {
  setItem: async (key: any, value: string) => {
    realm.write(() => {
      try {
        const olderState = realm.objects('Data').filtered(`id = root`)[0];
        realm.delete(olderState);
      } catch (e) {

      }
      realm.create('Data', { id: 'root', value }, true);
    });
    return Promise.resolve(true);
  },
  getItem: (key: any) => {
    let item: any;
    try {
      item = realm.objects('Data').filtered(`id = root`)[0]?.value;
    } catch (error) {

    }
    return Promise.resolve(item);
  },
  removeItem: (key: any) => {
    realm.write(() => {
      const item = realm.objects('Data').filtered(`id = root`)[0];
      realm.delete(item);
    });
    return Promise.resolve();
  },
};