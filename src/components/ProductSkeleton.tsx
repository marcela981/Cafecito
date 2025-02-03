export default function ProductSkeleton() {
    return (
      <div className="animate-pulse bg-coffee-100 rounded-xl p-4">
        <div className="h-48 bg-coffee-200 rounded-xl mb-4" />
        <div className="h-4 bg-coffee-200 rounded w-3/4 mb-2" />
        <div className="h-4 bg-coffee-200 rounded w-1/2" />
      </div>
    );
  }