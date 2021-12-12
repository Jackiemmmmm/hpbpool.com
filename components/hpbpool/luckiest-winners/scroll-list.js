import { makeStyles } from '@material-ui/styles';
import { Trans } from 'next-i18next';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const paddingHeight = (isMobile) => (isMobile ? 54 : 48);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    overflow: 'hidden',
    height: ({ height }) => height,
  },
  container: {
    '& > div': {
      ...theme.flex.center,
      fontSize: 28,
      lineHeight: '36px',
      color: theme.colors.white,
      paddingBottom: ({ isMobile }) => paddingHeight(isMobile),
      padding: '0 20px',
      alignItems: 'flex-start',
    },
  },
  contractId: {
    display: 'inline-block',
    width: 112,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

const getFirstCountData = (data, count) => data.filter((item, idx) => count > idx);
const getLastCountData = (data, count) => data.filter((item, idx) => count > data.length - idx);
const getDefaultData = (data, count) => [...data, getFirstCountData(data, count)];

const getPrams = (data, isMobile) => {
  const showItems = isMobile ? 9 : 5;
  const showAnimate = showItems < data.length;
  const listItemHeight = 36 + paddingHeight(isMobile);
  return { showItems, showAnimate, listItemHeight };
};
function ScrollList({ data, isMobile }) {
  const { showItems, showAnimate, listItemHeight } = getPrams(data, isMobile);
  const [{ idx, hideTransition, listData }, setIdx] = useState({
    idx: 0,
    hideTransition: false,
    listData: [...data, getDefaultData(data, showItems)],
  });
  const classes = useStyles({
    isMobile,
    height: listItemHeight * showItems - paddingHeight(isMobile),
  });
  useEffect(() => {
    let interval = () => {};
    if (showAnimate) {
      setInterval(() => {
        setIdx((prev) => {
          if (prev.idx === prev.listData.length - (showItems + 1)) {
            return {
              idx: 0,
              hideTransition: true,
              listData: [
                ...getLastCountData(data, showItems + 1),
                ...getDefaultData(data, showItems),
              ],
            };
          }
          return { ...prev, hideTransition: false, idx: (prev.idx += 1) };
        });
      }, 3000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [data, showAnimate, showItems]);
  return (
    <div className={classes.root}>
      <div
        className={classes.container}
        style={{
          transform: `translateY(-${idx * listItemHeight}px)`,
          transition: hideTransition ? 'none' : '0.3s',
        }}
      >
        {listData.map((item, idx) => (
          <div key={idx}>
            <span className={classes.contractId}>{item.contractId}</span>
            <Trans i18nKey="luckiest_winners_text">
              {{ winMoney: item.money }} {{ depositMoney: item.canDeposit }}
            </Trans>
          </div>
        ))}
      </div>
    </div>
  );
}

ScrollList.propTypes = {
  data: PropTypes.array.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default ScrollList;
