import { Range } from "react-date-range";
import Calender from "../../components/Calender";
import Buttons from "../../components/Buttons";

interface CarReservationsprops {
  price: number;
  dateRange: Range;
  totalPrice: number;
  disabled?: boolean;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabledDates?: Date[];
}

const CarReservation: React.FC<CarReservationsprops> = ({
  price,
  dateRange,
  totalPrice,
  disabled,
  onChangeDate,
  onSubmit,
  disabledDates,
}) => {
  return (
    <div className="bg-white rounded-xl border-[1px] overflow-hidden max-h-[65h] ">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">{price}</div>
        <div className="font-light text-neutral-600">day</div>
      </div>
      <hr />
      <Calender
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <Buttons
          disabled={disabled}
          label="Reserve"
          onClick={() => onSubmit()}
        />
      </div>
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>₹ {totalPrice}</div>
      </div>
    </div>
  );
};

export default CarReservation;
