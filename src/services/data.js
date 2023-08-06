export const InventoryType = {
  CAR: { value: "CAR", label: "Araba" },
  MOUSE: { value: "MOUSE", label: "Mouse" },
  KEYBOARD: { value: "KEYBOARD", label: "Klavye" },
  DISK: { value: "DISK", label: "Disk" },
  MONITOR: { value: "MONITOR", label: "Monitör" },
};

export const InventoryStatus = {
  DEPOT: { value: "DEPOT", label: "Depo" },
  USING: { value: "USING", label: "Personelde" },
  OFFICE: { value: "OFFICE", label: "Ofiste" },
};

export const AvailableInventoryStatus = {
  DEPOT: { value: "DEPOT", label: "Depo" },
  OFFICE: { value: "OFFICE", label: "Ofiste" },
};

export const Gender = {
  MALE: { value: "MALE", label: "Erkek" },
  FEMALE: { value: "FEMALE", label: "Kadın" },
};

export const GraduationStatus = {
  ASSOCIATE: { value: "ASSOCIATE", label: "Ön lisans" },
  BACHELOR: { value: "BACHELOR", label: "Lisans" },
  GRADUATE: { value: "GRADUATE", label: "Yüksek lisans" },
  DOCTORATE: { value: "DOCTORATE", label: "Doktora" },
};

export const Department = {
  SOFTWARE: { value: "SOFTWARE", label: "Yazılım Geliştirme" },
  ARGE: { value: "ARGE", label: "ARGE" },
};

export const Position = {
  DEVELOPER: { value: "DEVELOPER", label: "Yazılım Geliştirme Uzmanı" },
  ASSISTANT: { value: "ASSISTANT", label: "Yönetici Asistanı" },
  CHIEF: { value: "CHIEF", label: "Yönetici" },
};

export const MartialStatus = {
  SINGLE: { value: "SINGLE", label: "Bekar" },
  MARRIED: { value: "MARRIED", label: "Evli" },
};

export const WorkingStatus = {
  WORKING: { value: "WORKING", label: "Çalışıyor" },
  NOT_WORKING: { value: "NOT_WORKING", label: "Çalışmıyor" },
};

export const UserRole = {
  AD: "ADMIN",
  HR: "HR",
  IM: "IM",
};

export const mapLabelToEnumValue = (label, enumObj) => {
  const enumValues = Object.values(enumObj);
  const enumValue = enumValues.find((value) => value.label === label);
  return enumValue ? enumValue.value : "";
};
