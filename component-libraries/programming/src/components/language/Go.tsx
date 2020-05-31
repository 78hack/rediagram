import { resolve } from 'path';
import React, { FC } from 'react';
import { Node, Edge, ClusterPortal } from '@ts-graphviz/react';
import t from 'prop-types';

type Props = {
  name: string;
  upstream?: string[];
};

const icon = resolve(__dirname, '../../../assets/language/go.png');

export const Go: FC<Props> = ({ name, upstream }) => (
  <>
    <Node id={name} image={icon} shape="none" />
    <ClusterPortal>
      {upstream && upstream.map((destination) => <Edge targets={[name, destination]} key={destination} />)}
    </ClusterPortal>
  </>
);

Go.displayName = 'Pod';
Go.defaultProps = {
  upstream: [],
};

Go.propTypes = {
  name: t.string.isRequired,
  upstream: t.arrayOf(t.string.isRequired),
};