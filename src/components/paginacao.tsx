"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";


export default function Paginacao({ total }: { total: number }) {

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const current = Number(searchParams.get('page') ?? '1')

  function handleSearch(i: number) {
    const params = new URLSearchParams(searchParams)

    params.set('page', i.toString())

    replace(`${pathname}?${params.toString()}`)
  }

  const generatePaginationItems = () => {
    const items = [];
    const showEllipsis = total > 7;

    if (!showEllipsis) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= total; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              onClick={(e) => {
                e.preventDefault();
                // Atualizar para pagina {i}
                handleSearch(i)
              }}
              isActive={current === i}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      // Show first page
      items.push(
        <PaginationItem key={1}>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleSearch(1)
              // Atualizar para página 1
            }}
            isActive={current === 1}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );

      // Show ellipsis if current page is far from start
      if (current > 4) {
        items.push(
          <PaginationItem key="ellipsis1">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      // Show pages around current page
      const start = Math.max(2, current - 1);
      const end = Math.min(total - 1, current + 1);

      for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== total) {
          items.push(
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleSearch(i)
                }}
                isActive={current === i}
              >
                {i}
              </PaginationLink>
            </PaginationItem>
          );
        }
      }

      // Show ellipsis if current page is far from end
      if (current < total - 3) {
        items.push(
          <PaginationItem key="ellipsis2">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      // Show last page
      if (total > 1) {
        items.push(
          <PaginationItem key={total}>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleSearch(total)
              }}
              isActive={current === total}
            >
              {total}
            </PaginationLink>
          </PaginationItem>
        );
      }
    }

    return items;
  };



  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (current > 1) handleSearch(current - 1)
            }}
            className={current === 1 ? 'pointer-events-none opacity-50' : ''}
          />
        </PaginationItem>

        {generatePaginationItems()}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (current < total) handleSearch(current + 1)
            }}
            className={current === total ? 'pointer-events-none opacity-50' : ''}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>

  )
}
