// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  Section,
  Wrapper,
  Flex,
  Title,
  PasswordBlock,
  PasswordValue,
  Input,
  Error,
  Span,
  Label,
  Button,
  SubTitle,
  TextPassword,
  Block,
} from "./PasswordGeneratorStyle";

function PasswordGenerator() {
  const [passwords, setPasswords] = useState([]);
  const [length, setLength] = useState("12");
  const [error, setError] = useState("");
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handleLengthChange = (e) => {
    setLength(e.target.value);
  };

  const handleSubmit = () => {
    if (length > 32) {
      setError("Максимальная длина пароля - 32 символа");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const copyToClipboard = async (password) => {
    try {
      await navigator.clipboard.writeText(password);
    } catch (err) {
      return;
    }
  };

  const generate = (length) => {
    const numLength = parseInt(length, 10);
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "%*()?@#$~";
    let charset = "";
    if (includeLowercase) charset += lowercase;
    if (includeUppercase) charset += uppercase;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;

    let generatedPasswords = [];
    for (let j = 0; j < 6; j++) {
      let currentPassword = "";
      for (let i = 0, n = charset.length; i < numLength; i++) {
        currentPassword += charset.charAt(Math.floor(Math.random() * n));
      }
      generatedPasswords.push(currentPassword);
    }
    setPasswords(generatedPasswords);
  };

  return (
    <Section>
      <Wrapper>
        <Title>Генератор паролей</Title>
        <Flex>
          <PasswordBlock>
            <SubTitle>Настройка пароля</SubTitle>
            <label>
              <Span>Длина пароля:</Span>
              <Input type="number" value={length} onChange={handleLengthChange} />
            </label>
            {error && <Error>{error}</Error>}
            <Span>Символы:</Span>
            <PasswordValue>
              <Label>
                <input
                  type="checkbox"
                  checked={includeLowercase}
                  onChange={(e) => setIncludeLowercase(e.target.checked)}
                />
                <Span>Строчные буквы</Span>
              </Label>
              <Label>
                <input
                  type="checkbox"
                  checked={includeUppercase}
                  onChange={(e) => setIncludeUppercase(e.target.checked)}
                />
                <Span>Прописные буквы</Span>
              </Label>
              <Label>
                <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
                <Span>Цифры</Span>
              </Label>
              <Label>
                <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />
                <Span>Специальные символы</Span>
              </Label>
            </PasswordValue>
            <Button
              onClick={() => {
                if (handleSubmit()) {
                  generate(length);
                }
              }}
            >
              Сгенерировать пароли
            </Button>
          </PasswordBlock>
          <PasswordBlock>
            <SubTitle>Сгенерированные пароли</SubTitle>
            <Span>Нажми, чтобы скопировать</Span>
            <Block>
              {passwords.map((password, index) => (
                <TextPassword key={index} onClick={() => copyToClipboard(password)}>
                  {password}
                </TextPassword>
              ))}
            </Block>
          </PasswordBlock>
        </Flex>
      </Wrapper>
    </Section>
  );
}

export default PasswordGenerator;
