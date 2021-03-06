import React, { FC, useMemo } from 'react';
import { IconNode, HasDependences, useLabelText } from '@rediagram/cdk';
import { useAssertProvider } from '../../hooks/assert-provider';
import { resolveAsset } from '../../assets';

export type KinesisType = 'Video Streams' | 'Data Streams' | 'Data Firehose' | 'Data Analytics';

export type KinesisProps = {
  name: string;
  type?: KinesisType;
} & HasDependences;

function resolveImage(type?: KinesisType): string {
  switch (type) {
    case 'Video Streams':
      return resolveAsset('analytics/Kinesis/Video-Streams.png');
    case 'Data Streams':
      return resolveAsset('analytics/Kinesis/Data-Streams.png');
    case 'Data Firehose':
      return resolveAsset('analytics/Kinesis/Data-Firehose.png');
    case 'Data Analytics':
      return resolveAsset('analytics/Kinesis/Data-Analytics.png');
    default:
      return resolveAsset('analytics/Kinesis.png');
  }
}

function useIcon(type?: KinesisType): { path: string; size: number } {
  return useMemo(() => {
    return {
      path: resolveImage(type),
      size: 56,
    };
  }, [type]);
}

export const Kinesis: FC<KinesisProps> = ({ name, type, children, upstream, downstream }) => {
  useAssertProvider();
  const icon = useIcon(type);
  const label = useLabelText(children, { defaultValue: name, htmlLike: true });
  return <IconNode name={name} icon={icon} label={label} upstream={upstream} downstream={downstream} />;
};

Kinesis.displayName = 'Kinesis';
