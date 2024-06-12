// Dibuat sesuai kebutuhan aja file atau folder

export const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('id-ID', options);
};

export const Rupiah = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
});

