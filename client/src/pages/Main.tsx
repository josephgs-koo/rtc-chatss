/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import BasicInput from "../component/parts/BasicInput";
import Button from "../component/parts/Button";
import { useNavigate } from "react-router-dom";

const Main: React.FC = () => {
    const [value, setValue] = useState({
        roomName: "",
    });
    const navigate = useNavigate();

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...value,
            [e.target.id]: e.target.value,
        });
    };

    return (
        <div css={wrap}>
            <BasicInput value={value.roomName} onChange={handleValueChange} title="roomName" placeholder="Room ID" />
            <Button onClick={() => navigate("/game")} custom={btnCustom}>
                Hosting
            </Button>
        </div>
    );
};

export default Main;

const wrap = css({
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
});

const btnCustom = css`
    width: 100%;
    font-size: 1.2rem;
    padding: 0.5rem;
`;
