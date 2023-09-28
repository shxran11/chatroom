import { memo } from 'react';
import { useCurrentRoom } from '../../../context/Current-RoomContext';

const Top = () => {
  const name = useCurrentRoom(v => v.name);

  return <div>{name}</div>;
};

export default memo(Top);
