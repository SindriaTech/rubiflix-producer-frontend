import styled, { css } from 'styled-components';

export const Container = styled.div`
  label {
    display: inline-block;

    font-size: 18px;

    margin-bottom: 16px;
  }
`;

interface ImageProps {
  imageExists: boolean;
}

export const File = styled.div<ImageProps>`
  width: 100%;
  height: ${({ imageExists }) => (imageExists ? '176px' : ' 208px')};

  background: ${({ theme }) => theme.color.orange_10};

  border: 2px dashed ${({ theme }) => theme.color.orange};
  border-radius: 8px;

  position: relative;

  transition: all 0.4s;

  input {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 0;

    cursor: pointer;

    border-radius: 8px;
  }

  .icon {
    width: 48px;
    height: 48px;

    background: ${({ theme }) => theme.color.purple_30};

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    span {
      color: ${({ theme }) => theme.color.purple};
    }
  }

  strong {
    margin-top: 16px;
  }

  .accept-files {
    margin-top: 24px;
  }

  &:hover {
    border-style: solid;
    border-width: 3px;

    filter: brightness(0.75);
  }
`;

export const SelectFile = styled.div<ImageProps>`
  width: 100%;
  height: 100%;

  display: ${({ imageExists }) => (imageExists ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;

  flex-direction: column;
`;

export const UploadedFile = styled.div<ImageProps>`
  display: ${({ imageExists }) => (imageExists ? 'flex' : 'none')};
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 24px;

  img {
    width: 128px;
    height: 100%;

    background-image: contain;
  }

  .image {
    max-width: 128px;
    width: 100%;
    height: 128px;

    background-size: cover;

    border-radius: 8px;

    flex: 1;
  }

  .content {
    max-width: 300px;

    margin-left: 24px;

    p {
      margin-top: 16px;
    }
  }

  button {
    margin-left: auto;

    background: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 32px;

      color: ${({ theme }) => theme.color.purple};
    }
  }
`;

interface ProfileProps {
  image?: string;
}

export const Profile = styled.div<ProfileProps>`
  width: 160px;
  height: 160px;

  border-radius: 50%;

  background: ${({ theme }) => theme.color.primary_light};

  border: 2px solid ${({ theme }) => theme.color.primary_lighten_2};

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  ${({ image }) =>
    image &&
    css`
      background-image: url(${image});

      background-position: center;

      background-size: cover;

      cursor: normal;

      .icon {
        display: none;
      }
    `}

  .close {
    width: 24px;
    height: 24px;

    border-radius: 50%;

    position: absolute;

    right: -12px;
    top: -12px;

    background: ${({ theme }) => theme.color.red};

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    span {
      font-size: 16px;
    }
  }

  .icon {
    height: 48px;

    span {
      font-size: 48px;
      color: ${({ theme }) => theme.color.primary_lighten_2};
    }
  }

  input {
    cursor: pointer;

    position: absolute;

    width: 100%;
    height: 100%;

    opacity: 0;

    ${({ image }) =>
      image &&
      css`
        cursor: normal;
      `}
  }
`;
