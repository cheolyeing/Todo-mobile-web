import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled(Link)`
  min-width: 500px;
  max-width: 500px;
  justify-content: left;
  text-decoration: none;
  font-size: 17px;
  color: #2980b9;
`;

export const AddLink = styled(Link)`
  text-decoration: none;
  text-color: black;
`;

export const AddButton = styled.div`
  margin-top: -15px;
  margin-bottom: 5px;
  padding: 0.6em 0em 0.6em 0em;
  min-width: 95%;
  text-align: center;
  font-size: 17px;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  background-color: #c0c0c0;
  color: black;
`;

export const SaveLink = styled(Link)`
  text-decoration: none;
  text-color: black;
`;

export const SaveDiv = styled.div`
  margin-top: -10px;
  margin-bottom: 60px;
  padding: 0.5em 0em 0.5em 0em;
  width: 95%;
  height: 100%;
  text-align: center;
  font-size: 17px;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  background-color: #c0c0c0;
  color: black;
`;

export const TodoListContainer = styled.div`
  margin-top: -15px;
  min-width: 95%;
  height: 450px;
  background-color: #c0c0c0;
  overflow-y: scroll;
`;

export const Input = styled.input`
  margin-top: -111.1px;
  min-width: 95%;
  background-color: #c0c0c0;
  padding: 0.5em 0em 0.5em 0em;
  border: 0;
  outline: 0;
`;

export const ContentArea = styled.textarea`
  min-width: 95%;
  resize: none;
  background-color: #c0c0c0;
  border: 0;
  outline: 0;
`;

export const WeatherBox = styled.div`
  margin-top: -15px;
  min-width: 95%;
  height: 150px;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
`;

export const FirstBox = styled.div`
  float: left;
  width: 0px;
`;

export const DayWeatherBox = styled.div`
  width: 20%;
  height: 100%;
  margin-right: 10px;
  padding: 1em;

  background-color: #c0c0c0;
  display: inline-block;
  top: 50%;
  justify-content: center;
  text-align: center;
`;

export const Header3 = styled.h3`
  margin-top: 50px;
`;

export const TodoContainer = styled.div`
  padding-top: 0.2em;
  margin-top: 1px;
`;

export const TodoInside = styled.div`
  padding-top: 0.1em;
  width: 70%;
  display: inline-block;
`;

export const TodoTitle = styled.div`
  padding-left: 0.5em;
  color: ${(props) =>
    !props.theme.done && props.theme.dateOver ? "red" : "black"};
  width: 85%;
  font-size: 18px;
  text-decoration: ${(props) => (props.theme.done ? "line-through" : "none")};
`;

export const TodoDueDate = styled.div`
  padding-left: 0.5em;
  color: ${(props) =>
    !props.theme.done && props.theme.dateOver ? "red" : "#666666"};
  font-size: 14px;
`;

export const TodoDeleteBtnContainer = styled.div`
  display: inline-block;
  float: right;
  float: bottom;
  margin-right: 5px;
  transform: ${(props) =>
    props.theme.dueDate ? "translateY(50%)" : "translateY(0%)"};
`;

export const TodoDeleteBtn = styled.button`
  font-size: 12px;
  border: 0;
  outline: 0;
  font-weight: 6600;
  cursor: pointer;
  background-color: #c0c0c0;
`;

export const TodoCheckBox = styled.input`
  transform: scale(1.5);
`;

export const TodoCheckBoxContainer = styled.div`
  float: left;
  margin-left: 10px;

  transform: ${(props) =>
    props.theme.dueDate ? "translateY(50%)" : "translateY(0%)"};
`;
