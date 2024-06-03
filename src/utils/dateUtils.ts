import {format, isSameDay} from 'date-fns';

function formatCreationAndUpdate(
  createdAt: Date,
  updatedAt: Date,
): {createdDateText: string; updatedDateText: string | null} {
  const createdAtFormatted = format(createdAt, 'dd/MM/yyyy HH:mm');
  if (createdAt.getTime() === updatedAt.getTime()) {
    return {createdDateText: createdAtFormatted, updatedDateText: null};
  }

  const areDatesTheSameDay = isSameDay(createdAt, updatedAt);
  const updatedAtFormat = areDatesTheSameDay ? 'HH:mm' : 'dd/MM/yyyy HH:mm';

  const updatedAtFormatted = format(updatedAt, updatedAtFormat);
  return {
    createdDateText: createdAtFormatted,
    updatedDateText: `Updated ${
      areDatesTheSameDay ? 'at ' : ''
    }${updatedAtFormatted}`,
  };
}

export const dateUtils = {
  formatCreationAndUpdate,
};
