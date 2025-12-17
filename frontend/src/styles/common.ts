
import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  background: radial-gradient(circle at top, #1d4ed8 0, #020617 35%, #020617 100%);
  padding: 32px 16px;
`;

export const Card = styled.div`
  max-width: 960px;
  margin: 0 auto;
  background: #020617;
  border-radius: 16px;
  padding: 24px 20px 28px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(148, 163, 184, 0.35);
`;

export const Heading = styled.h1`
  font-size: 26px;
  margin: 0 0 4px;
  color: #f9fafb;
`;

export const Subheading = styled.p`
  margin: 0 0 18px;
  font-size: 13px;
  color: #9ca3af;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 999px;
  border: none;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: #f9fafb;
  background: linear-gradient(135deg, #3b82f6, #6366f1 40%, #ec4899 100%);
  cursor: pointer;
  box-shadow: 0 12px 30px rgba(59, 130, 246, 0.45);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: transform 0.16s ease-out, box-shadow 0.16s ease-out,
    filter 0.16s ease-out, opacity 0.16s ease-out;

  &:hover {
    transform: translateY(-1px) scale(1.01);
    box-shadow: 0 18px 40px rgba(56, 189, 248, 0.55);
    filter: brightness(1.05);
  }

  &:active {
    transform: translateY(0) scale(0.99);
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.8);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export const Input = styled.input`
  height: 36px;
  padding: 0 10px;
  border-radius: 10px;
  border: 1px solid #1f2937;
  background: #020617;
  color: #e5e7eb;
  font-size: 13px;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease,
    background-color 0.15s ease;

  &::placeholder {
    color: #6b7280;
  }

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 1px rgba(37, 99, 235, 0.7);
    background: #020617;
  }
`;

export const Select = styled.select`
  height: 36px;
  padding: 0 10px;
  border-radius: 10px;
  border: 1px solid #1f2937;
  background: #020617;
  color: #e5e7eb;
  font-size: 13px;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease,
    background-color 0.15s ease;

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.7);
  }
`;

export const FormRow = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 12px;
  align-items: flex-end;
  margin-bottom: 18px;
`;

export const Field = styled.div`
  min-width: 150px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #9ca3af;
`;
