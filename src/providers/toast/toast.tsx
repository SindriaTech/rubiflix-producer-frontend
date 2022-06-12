import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react';
import { useTransition, animated } from 'react-spring';

import { Toast } from '../../atoms';

import * as S from './styles';

interface IToast {
  index: string;
  type: 'success' | 'error' | 'alert';
  title: string;
  message: string;
}

interface ToastContextProps {
  createToast(data: Omit<IToast, 'index'>): void;
}

const ToastContext = createContext<ToastContextProps>({} as ToastContextProps);

export const ToastProvider: React.FC = ({ children }) => {
  const [toasts, setToasts] = useState<IToast[]>([]);

  const removeToastByIndex = useCallback((id: string) => {
    setToasts((prev) => prev.filter((item) => item.index !== id));
  }, []);

  const transitions = useTransition(toasts, {
    from: { transform: 'translate3d(120%, 0, 0)', opacity: 0 },
    enter: { transform: 'translate3d(0%, 0, 0)', opacity: 1 },
    leave: { transform: 'translate3d(120%, 0, 0)', opacity: 0 },
    delay: 200
  });

  const createToast = (data: Omit<IToast, 'index'>) => {
    const uniqueId = Math.floor(Date.now() * Math.random()).toString(36);

    setToasts((prevToasts) => [...prevToasts, { index: uniqueId, ...data }]);

    setTimeout(() => {
      removeToastByIndex(uniqueId);
    }, 4000);
  };

  const value = useMemo(
    () => ({
      createToast
    }),
    []
  );

  return (
    <ToastContext.Provider value={value}>
      <S.Container>
        {transitions((styles, item) => (
          <animated.div key={item.index} style={styles}>
            <Toast
              id={String(item.index)}
              {...item}
              onDelete={() => {
                removeToastByIndex(item.index);
              }}
            />
          </animated.div>
        ))}
      </S.Container>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('Toast context dont exist');
  }

  return context;
};
