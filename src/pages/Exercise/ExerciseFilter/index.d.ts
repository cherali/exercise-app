type SelectChangeFn = (newValue: OnChangeValue<Option, IsMulti>, actionMeta: ActionMeta<Option>) => void;

export interface ExerciseFilterProps {
  pageOption?: Array<number>;
  itemPerPage?: number;
  onChaageItemPerPage?: SelectChangeFn;
  onChangeBodyPart?: SelectChangeFn;
  bodyPart?: string;
  equipment?: string;
  onChangeEquipment?: SelectChangeFn;
  disabledFilterButton?: boolean;
  hanldeFilterButton?: () => void;
}