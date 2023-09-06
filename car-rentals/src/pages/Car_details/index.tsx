import { useParams } from "react-router-dom";
import Detailhead from "./Detailhead";
import CarInfo from "./CarInfo";
import CarReservation from "./CarReservation";
import { useState, useMemo, useEffect, useCallback } from "react";
import useUserAuth from "../../hooks/useUserAuth";
import useLoginModal from "../../hooks/useLoginModal";
import { differenceInCalendarDays, eachDayOfInterval } from "date-fns";
import { Range } from "react-date-range";
import { get_specific_car } from "../../api/car";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Cardetails } from "../../types/index";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

const Car_details = () => {
  const navigate = useNavigate();
  const userauth = useUserAuth();
  const useloginmodal = useLoginModal();
  const [car_data, setcar_data] = useState<Cardetails>({
    _id: "",
    car_type: "",
    horsepower: 0,
    image_urls: [],
    mileage: 0,
    name: "",
    num_seats: 0,
    price_per_day: 0,
    reservations: [],
  });
  const [isloading, setisloading] = useState(false);
  const [totalPrice, settotalprice] = useState(5000);
  const [daterange, setdaterange] = useState<Range>(initialDateRange);
  const { id } = useParams();

  const disabledDates = useMemo(() => {
    let dates: Date[] = [];
    if (car_data.reservations === undefined) {
      return dates;
    }
    car_data.reservations.forEach((reservation) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.start_date),
        end: new Date(reservation.end_date),
      });
      dates = [...dates, ...range];
    });
    return dates;
  }, [car_data.reservations]);

  const oncreateReservation = useCallback(() => {
    if (!userauth.loggedin) {
      return useloginmodal.onOpen();
    }
    setisloading(true);
    const data_sub = {
      car_id: id,
      total_price: totalPrice,
      start_date: daterange.startDate,
      end_date: daterange.endDate,
    };
    axios
      .post("/reservation/create", data_sub)
      .then(() => {
        toast.success("Car Reserved !");
        setdaterange(initialDateRange);
        navigate("/");
      })
      .catch(() => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setisloading(false);
      });
  }, [
    daterange.startDate,
    daterange.endDate,
    userauth.loggedin,
    useloginmodal,
    totalPrice,
    id,
    navigate,
  ]);

  useEffect(() => {
    setisloading(true);
    if (id) {
      get_specific_car(id)
        .then((data) => {
          setcar_data(data);
        })
        .catch(() => {
          toast.error("Error getting data");
        })
        .finally(() => {
          setisloading(false);
        });
    }
  }, [id]);

  useEffect(() => {
    if (daterange.startDate && daterange.endDate) {
      const daycount = differenceInCalendarDays(
        daterange.endDate,
        daterange.startDate
      );
      if (daycount && 5000) {
        settotalprice(daycount * 5000);
      } else {
        settotalprice(5000);
      }
    }
  }, [daterange]);
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 ">
      <div className="max-w-screen-lg mx-auto ">
        <div className="flex flex-col gap-6">
          <Detailhead imageSrc={car_data.image_urls[0]} title={car_data.name} />
          <div className="grid grid-cols-1 md:grid-cols-7 gap-10 mt-6 mb-3">
            <CarInfo
              category={car_data.car_type}
              description="This is the best car"
              seats={car_data.num_seats}
              milage={car_data.mileage}
              horsepower={car_data.horsepower}
            />
            <div className="order-first mb-10 md:order-last md:col-span-3 w-[90vw] sm:w-[30vw]">
              <CarReservation
                price={car_data.price_per_day}
                totalPrice={totalPrice}
                onChangeDate={(value) => setdaterange(value)}
                dateRange={daterange}
                disabled={isloading}
                onSubmit={oncreateReservation}
                disabledDates={disabledDates}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car_details;
