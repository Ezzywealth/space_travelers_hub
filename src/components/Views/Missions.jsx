import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import asyncMission from '../../redux/slices/api/apiSlice';
import Mission from './Mission';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length < 1) {
      dispatch(asyncMission());
    }
  }, [dispatch, missions]);

  return (
    <main className="overflow-scroll">
      <table className="static table-auto mx-6">
        <thead>
          <tr>
            <th className="border px-4 py-2">Mission</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2"> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission
              key={mission.mission_id}
              missionId={mission.mission_id}
              missionName={mission.mission_name}
              description={mission.description}
              reserved={mission.reserved}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};
export default Missions;
