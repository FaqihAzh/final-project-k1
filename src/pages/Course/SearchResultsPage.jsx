import { useLocation } from "react-router-dom";
import CourseCard from "../../components/CourseCard";
import { Heading, Paragraph } from "../../components/Typography";
import { useEffect } from "react";
import {
  setIsMyCourse,
  setIsNotif,
  setIsProfile,
} from "../../redux/reducers/courseSlice/courseSlice";
import { useDispatch } from "react-redux";
import notFound from "../../assets/images/notFoundSearch.png";
import { Button } from "flowbite-react";

const SearchResultsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsMyCourse(false));
    dispatch(setIsNotif(false));
    dispatch(setIsProfile(false));
  }, []);

  const location = useLocation();
  const results = location.state.results;
  const searchQuery = new URLSearchParams(location.search).get("query");

  return (
    <div className="w-screen min-h-screen pt-24 pb-12 px-4 md:px-12 lg:px-24 lg:pt-28 bg-softGrey flex flex-col gap-4">
      <div className="grid grid-cols-3 items-center relative">
        <Heading
          variant="h3"
          className="text-darkGrey col-span-2 flex gap-2 items-center cursor-pointer"
        >
          {`Results for ${searchQuery}`}
        </Heading>
      </div>
      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {results.map((course) => (
            <CourseCard key={course.id} course={course} isMyClass={false} />
          ))}
        </div>
      ) : (
        <div className="justify-center items-center flex flex-col h-full">
          <img src={notFound} alt="notFound" />
          <Paragraph className="text-darkGrey capitalize">
            Sorry, the course is not available
          </Paragraph>
          <Button
            type="link"
            href="/"
            className="mt-4 !px-4 !py-2 bg-darkOrange text-white rounded-full text-center"
          >
            Back to Homepage
          </Button>
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;
